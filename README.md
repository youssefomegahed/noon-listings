# Running the Application

Follow these steps to set up and run the Next.js application on your local machine.

## Prerequisites

Make sure you have Node.js installed on your machine:

- [Node.js](https://nodejs.org/) - A JavaScript runtime environment

## Installation

1. **Clone the Repository:** First, clone this repository to your local machine using the following commands in your terminal:
   
   ```sh
   git clone https://github.com/youssefomegahed/noon-listings
   ```
   
3. **Navigate to Project Directory:** Change your working directory to the project folder:
   
   ```sh
   cd noon-listings
   ```
   
5. **Install Dependencies:** Run the following command to install the project's dependencies:
   
   ```sh
   npm install
   ```

## Running the Application

Once you have successfully installed the dependencies, follow these steps to run the Next.js application:

1. **Start the Development Server:** Run the following command to start the development server:

   ```sh
   npm run dev
   ```

2. **Access the Application:** Open your web browser and navigate to http://localhost:3000. You will see the Next.js application running.


## Folder Structure

Here's the simplified overview of the structure of the project's folders:

 ```
.
├── public
├── src
│ ├── app
│ │ ├── components
│ │ │ ├── NavBars
│ │ │ ├── Listings
│ │ │ └── ListingItem
│ │ ├── data
│ │ └── page.js
├── ...
├── README.md
 ```


- `public`: Contains static assets, namely the Noon logo used.
- `src`: Contains the main source code of the application.
  - `app`:
    - `components`: Contains the reusable React components.
      - `NavBars`: Navigation bar components (mobile navigation bar & desktop navigation bar).
      - `Listings`: Component for grouping ListingItem components in a list.
      - `ListingItem`: Component for individual listing items (posts).
    - `data`: Contains the placeholder data used in the application (listings data).
    - `page.js`: Main application entry point.
- `README.md`: The documentation file.
- `...`: Other files and directories.

