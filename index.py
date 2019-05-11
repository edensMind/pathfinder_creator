from flask import Flask
from flask import request, jsonify
from flask import render_template
##################################################################################
import sys
sys.path.insert(0,"./equipment")

#Armor
from light_armor import light_armor
from medium_armor import medium_armor
from heavy_armor import heavy_armor
from shields import shields
from armor_mods import armor_mods

##################################################################################

application = Flask(__name__)

##################################################################################
#Home Page
@application.route("/")
def home():
	h_title = "Pathfinder Character Creater"
	return render_template(
			'home.html', 
			title=h_title, 
			message=h_title
			)



##################################################################################
#Character Creation Page
@application.route('/creation')
def creation():

	return render_template(
			"creation.html",
			light_armor=light_armor,
			medium_armor=medium_armor,
			heavy_armor=heavy_armor,
			shields=shields,
			armor_mods=armor_mods
			)






##################################################################################
#Results Page
@application.route('/results', methods=['GET', 'POST'])
def results():
	#get character form data from creation POST
	if request.method == 'POST':
		results = request.form

		#iterate results with:
		#for key, value in results.items():

		return render_template(
				"results.html",
				results = results
				)





##################################################################################
if __name__ == "__main__":
	application.run(host='0.0.0.0')
