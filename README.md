# GoDriveRentals - Online Car Rental Service in Ukraine

## Project Description
GoDriveRentals is an online platform for car rentals in Ukraine. Our service offers a wide selection of cars from various brands and configurations to meet the needs of our customers. We provide convenient rental terms at affordable prices.

## Technical Details
- **Technologies**: React, React Router, Axios, JS
- **Use of UI Service**: We use [Mockapi](https://mockapi.io/) to store and retrieve car listings.
- **Routing**: We use React Router to create the following routes:
  - `/` - Home page with a general description of the company's services.
  - `/catalog` - Page containing a catalog of available cars.
  - `/favorites` - Page with listings that have been added to the user's favorites.
- **Filtering**: We have added the ability to filter listings by car brand, hourly rental price, and mileage range.
- **Pagination**: The catalog page displays 8 listings, and additional listings can be loaded using the "Load more" button.
- **Favorite Listings**: Users can add listings to their favorites list, and their state is preserved when the page is refreshed.
- **Modal Window**: Each listing has a "Learn more" button that opens a modal window with detailed information about the car and rental terms. The modal can be closed by clicking the "X" button, clicking on the backdrop, or pressing the "Esc" key.

## Communication with the Company
- To contact our company, you can click on the "Rental car" button on the listing page, and you will be provided with the option to contact us at +380730000000.

## Installation and Running
1. First, clone this repository to your computer.
2. Navigate to the project's root directory.
3. Open the command line and enter the command `npm install` to install the necessary dependencies.
4. After the installation is complete, enter the command `npm start` to run the project.

## Links
- [Demo on GitHub Pages](https://kovalovaanastasiia.github.io/GoDriveRentals/)
- [GitHub Repository](https://github.com/kovalovaanastasiia/GoDriveRentals)

## API Description
We use [Mockapi](https://mockapi.io/) to create and retrieve car listings. To access listings, use the following resources:

- **GET /adverts**: Get a list of all listings.
- **GET /adverts/{id}**: Get information about a specific listing by its ID.
- **POST /adverts**: Add a new listing (authentication required).
- **PUT /adverts/{id}**: Update information about an existing listing (authentication required).
- **DELETE /adverts/{id}**: Delete a listing by its ID (authentication required).

## Main Authors
- [Author's GitHub Profile](https://github.com/kovalovaanastasiia)
