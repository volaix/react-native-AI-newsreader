# AI Newsreader

This app grabs The West Australian's 'Offbeat' news articles. It then sets these up to be read by Microsoft Azure's AI Vision reader. 
* Includes infinite scrolling
* Custom Headers and page content based on article clicked

### Screenshots
![image](https://user-images.githubusercontent.com/16506248/34509470-4139f544-f085-11e7-90a4-40e004e35e26.png)

![image](https://user-images.githubusercontent.com/16506248/34509478-50e2b828-f085-11e7-88f8-6d3ea407a52c.png)

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
* Test on Android (Should work, all styling is relative and doesnt use padding)
* Make delays in request to server (so it feels more like facebook loading)
* Make article button do something. "Perhaps link to original article?"
* Tests
* Inspiration
* etc
