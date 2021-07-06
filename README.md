## MyNews - News Portal

MyNews is a news app where users can get the top and latest news headlines from around the world. The app was built with React and Redux and integrated with NY Times API which provides relevant news data for the app.

### Design

The app has a simple and modern responsive design which allows users to easily navigate, search and interact with the content, either on their laptops or mobile devices.

The basic layout for desktop users consists of three main components:

1. Search bar
2. News Category Navigation Menu
3. News Display

The same layout design is applied for mobile users with the only difference of where the navigation menu is placed and how the news display is shown for mobile users.

#### Search Bar

The Search bar is located on the top of the page. It has the app brand name and a simple search input field with a search button. In the search input field, a user can type in any keyword and search for any news article by its title, either by clicking the search button or hitting Enter.

#### News Category Navigation Menu

On the middle left side of the screen, below the search bar, there is a News Category Navigation Menu. The menu has a home link button and links for specific available news category which includes general, business, health, science, sports and technology news. For users on their mobile devices, the news category navigation menu can be accessed by clicking on the navigation menu button. Once the button is clicking, the navigation menu is shown as a modal with the app name, search input field and the navigation menu.

#### News Display

By clicking on a nav link, the user is shown the news display page which is divided into two sections, a display of news cards and a latest news column located in the top right corner. For mobile devices user, the news display is displayed into two tabs. The first tab shows the top and featured news while the second is reserved for the latest news.

Inside of the news cards display, each news card shows a news article with a headline image, news category and subcategory, title and author.

In the top right corner of the card, there is a blue bookmark icon. By clicking on it, the user bookmarks the selected news card. If a user bookmarks a news card, the bookmarked news card will be stored inside of the app and shown on the home news page. The bookmarked news are labelled as featured so the user can differentiate from other cards that the user has not bookmarked yet. Also, if the user suddenly stumbles upon on a news card the user has already bookmarked, that exact news card is assigned with a red bookmark icon to indicate that the card is already bookmarked.

## How to Use the App

1. Start the app - npm start
2. The news display should be shown on screen with the list of top and latest news.
3. Use the navigation menu to navigate between the home page and different news categories to find relevant news.
4. Use the search input field on top of the main interface to search and filter through all of the news by their title
5. Click a card to select a news article and bookmark it. The bookmarked news article will be shown on the home page as featured and stored in the app's local storage.

### Live Version

- Vercel: https://mynews-lemon.vercel.app/
