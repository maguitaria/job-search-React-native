# Job Search App in React Native

## Description

This React Native application is designed for job searching, utilizing an external API to fetch and display job listings. It's an excellent resource for those looking to enhance their React Native skills, particularly in handling API requests and rendering data.

## Features

- Fetch job listings from an external API.
- Display job details in a user-friendly format.
- Filter and search functionality based on job titles and locations.
- Application state management.

## Installation

To run this app, you need to have Node.js and npm/yarn installed on your machine. 

1. **Clone the repository:**
   ```bash
   git clone [repository URL]
   cd [repository name]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn
   ```

3. **Run the app:**
   ```bash
   npx react-native run-android
   ```
   or for iOS:
   ```bash
   npx react-native run-ios
   ```
Absolutely, configuring a virtual machine in Android Studio or using a physical device with Expo are both valid options for testing a React Native app. Below is an expanded section for the README that includes instructions for both methods:

---
To test and run the application, you can either use a virtual machine in Android Studio or your physical device with Expo. 

### Using Android Studio Virtual Device

1. **Set Up Android Studio:**
   - If you haven't already, download and install [Android Studio](https://developer.android.com/studio).
   - Open Android Studio and go to the AVD Manager to set up a virtual device.

2. **Create a Virtual Device:**
   - In AVD Manager, click on "Create Virtual Device".
   - Choose a device definition and select a system image (like a version of Android).
   - Finish the setup and launch the virtual device.

3. **Run the App on the Virtual Device:**
   - Open your terminal or command prompt.
   - Navigate to your project directory.
   - Run the app using:
     ```bash
     npx react-native run-android
     ```

### Using Expo with Your Physical Device

1. **Install Expo:**
   - If you haven’t already, install Expo CLI:
     ```bash
     npm install -g expo-cli
     ```
   - Install the Expo app on your iOS or Android phone from the App Store or Google Play Store.

2. **Start the Expo Project:**
   - In your project directory, start the Expo project:
     ```bash
     expo start
     ```

3. **Scan the QR Code:**
   - Open the Expo app on your phone and scan the QR code provided in the terminal or command prompt.
   - Your app should now start running on your device.

### Troubleshooting

If you encounter issues, make sure that:
- Your development server is running.
- The virtual device or your physical device is properly set up and connected.
- You have the latest version of Node.js, React Native, and Expo CLI installed.

---

These instructions provide a basic guideline for running the app in a development environment. Make sure to tailor them according to your specific app setup and requirements.
## Usage

After running the app, you'll see a list of job postings fetched from the API. Use the search bar to filter jobs by title or location. Select a job to view detailed information.

## Contributing

Contributions are welcome! Please text me if you are interested in joining)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to good tutorial in Youtube for providing this idea of development.
