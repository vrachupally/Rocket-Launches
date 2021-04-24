import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://postgres:postgres@localhost:5432/Rocket_launch")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
launch_data = Base.classes.launch_data

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
        f"/api/v1.0/launchdata<br/>"
        
    )


@app.route("/api/v1.0/launch_data")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all launch data"""
    # Query all passengers
    results = session.query(launch_data).all()

    session.close()

    # Convert list of tuples into normal list
    all_launches list(np.ravel(results))

    return jsonify(all_launches)





if __name__ == '__main__':
    app.run(debug=True)
