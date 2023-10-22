import base64
import io
import os
import sqlite3
from PIL import Image
from flask import Flask, jsonify, request

from forest_mask import ForestMask

app = Flask(__name__)

db_connection = sqlite3.connect('forest_data.db')
db_cursor = db_connection.cursor()
db_cursor.execute('''
    CREATE TABLE IF NOT EXISTS forest_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        point1_latitude REAL,
        point1_longitude REAL,
        point2_latitude REAL,
        point2_longitude REAL,
        point3_latitude REAL,
        point3_longitude REAL,
        point4_latitude REAL,
        point4_longitude REAL,
        area REAL
    )
''')
db_connection.commit()

def store_data(point1, point2, point3, point4, area):
    db_cursor.execute("INSERT INTO forest_data (point1_latitude, point1_longitude, point2_latitude, point2_longitude, point3_latitude, point3_longitude, point4_latitude, point4_longitude, area) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", (point1[0], point1[1], point2[0], point2[1], point3[0], point3[1], point4[0], point4[1], area))
    db_connection.commit()

@app.route('/api/get', methods=['GET'])
def get():
    data = request.get_json()
    image_base64 = data['image']
    points = data['points']

    image_raw = base64.b64decode(image_base64)
    image = Image.open(io.BytesIO(image_raw))
    
    # We get the image and points(latitude, longitude) as input    
    return_image, return_area = ForestMask.get_all(image)

    return_image = image_to_base64(return_image)
    
    store_data(points[0], points[1], points[2], points[3], return_area)

    response = {
        'image': return_image,
        'area': return_area
    }
    
    # We return json with the image and area in m2
    return jsonify(response)

def image_to_base64(image):
    img_str = base64.b64encode(image).decode('ascii') # or utf-8?
    return img_str

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000)) # Remove args to run prod