from traceback import print_tb
from flask import Blueprint, request, jsonify

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():

    print(request.form)
    print(request.files)
    return jsonify({"form": request.form, "files": request.files['avatar'].filename})