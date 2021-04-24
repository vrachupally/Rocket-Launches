import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import inspect
from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = sqlalchemy.create_engine("postgresql://postgres:postgres@localhost:5432/Rocket_launch")
connection = engine.connect()
metadata = sqlalchemy.MetaData()
launch_data = sqlalchemy.Table("launch_data", metadata, autoload=True, autoload_with=engine)
query = sqlalchemy.select([launch_data])
ResultProxy = connection.execute(query)
ResultSet = ResultProxy.fetchall()

Inspector = inspect(engine)
Inspector.get_table_names()
columns = Inspector.get_columns('launch_data')
# print(columns)
launch_data_column_names = []
for column in columns:
    launch_data_column_names.append(column['name'])
# print(launch_data_column_names)
# print(ResultSet)

# reflect an existing database into a new model
# Base = automap_base()
# reflect the tables
# Base.prepare(engine, reflect=True)

# Save reference to the table
# launch_data = Base.classes.launch_data
# print(Base.classes.keys())

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/launch_data<br/>"
        
    )


@app.route("/api/v1.0/launch_data")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all launch data"""
    # Query all passengers
    results = session.query(launch_data).all()
    return_data = []
    for result in results:
        current_dict = {}
        for index, column_name in enumerate(launch_data_column_names):
            current_dict[column_name] = result[index]
        return_data.append(current_dict)
        
    
    # print(results)
    session.close()

    # Convert list of tuples into normal list
    all_launches = list(np.ravel(return_data))

    return jsonify(all_launches)






if __name__ == '__main__':
    app.run(debug=True)
