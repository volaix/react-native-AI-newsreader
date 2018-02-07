# MAJOR UPDATE
I am currently taking out the AI aspect of this app as my API has been used too much. Instead I am making this project into a 'more pretty' UI as a newsreader.

# AI Newsreader

This app grabs The West Australian's 'Offbeat' news articles. It then sets these up to be read by Microsoft Azure's AI Vision reader.
* The West Australian API
* Microsoft Azure, AI vision reader API
* React Navigation
* Includes infinite scrolling
* Custom Headers and page content based on article clicked

### Screenshots
TBA

## How to use

* To use, clone the repo
* Type 'yarn install' to install the libraries used
* Then type 'yarn start' to run
* When the QR code appears, install the 'Expo' app on your device, then scan the code.

## Snack for Online Viewing:
I have just tried to upload to Snack, but Snack has issues downloading the modules of the latest version of Redux Saga. Therefore the app won't be available on Snack for the time being :/

## Built With

* React Native
* Redux
* Redux-Saga
* React Native Elements
* Remote Redux Dev Tools (amazing)
* React Navigation
* Javascript, ES7
* Expo
* Love


## Author

* **Mark David Teo** - Available. Enquire at hi@markdt.design

## Acknowledgments

Thanks to The West for their API! I ended up grabbing it from their open fetch requests on the website rather than using the supplied API.

Thanks to Microsoft Azure for their image reader!

# Todo
* Make delays in request to server (so it feels more like facebook loading)
* Make article button do something. "Perhaps link to original article?"
* Tests
