# Users Data Website

This website is integrated with the Users Info API to display user data. It consists of various components and services to manage user information efficiently.

## Components

### 1. Users List Component

- Displays data of multiple users.
- Utilizes the User Card Component to represent each user.
- Implements server-side pagination using ngx-pagination for improved performance.

### 2. User Card Component

- Presents detailed information about a single user.
- Nested within the Users List Component to represent individual users.

### 3. Loading Spinner Component

- Indicates when data is being fetched from the server.
- Provides visual feedback to users during data loading processes.

### 4. Error Message Component

- Displays error messages when data retrieval encounters issues.
- Ensures users are informed about any errors that occur during the application's operation.

### 5. User Details Component

- Shows comprehensive details about a selected user.
- Enables users to view specific information related to individual users.

## Services

### 1. Data Service

- Responsible for fetching user data from the server.
- Facilitates communication between the frontend application and the Users Info API.

## Interfaces

- **User Interface**: Defines the structure of user data fetched from the server.
- **Response Interface**: Specifies the format of responses received from API requests.

## Dependencies

- **ngx-pagination**: Utilized to implement server-side pagination, enhancing the performance of data retrieval operations.

## Usage

To run the website locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the application with `ng serve`.
4. Access the website through the provided localhost address in your browser.
