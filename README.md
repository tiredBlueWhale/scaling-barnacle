# scaling-barnacle

## Goal

Create a Managment system to keep track of attendees during a youth camp.

### Priority
* List of all attendees with the currect state (present, absent, commuting, sick, excursion) ❗❗❗ automatic sync
* QrScanner to change attendee state

### Additonal
* CRUD Excursions (If there is a day trip, if the attendees are present but not in the main vicinity
* CRUD Shopping list
* CRUD Cleaning list
--> Have a generic admin interface, to create different kinds of lists
--> If that does not work, have a config of which views are available in the app

### Nice to have, to keep in mind, plan to use it
* Localization

## System

```mermaid
flowchart LR;
    subgraph User;
        direction TB;
        %% ~~~ does not work
        Attendee -.-> Supervisor
        %% Looks bad
        %% Admin --- CMS
    end;
    subgraph Application
        direction TB
        Web -.- iOS -.- Android
    end
    subgraph Backend
        direction LR
        Gateway --- CMS
        CMS --- database[(Database)]
    end
    User --- Application
    Admin --- Application
    Admin --- CMS
    Application --- Gateway
```

### Frontend

Either [react-native](https://reactnative.dev/) or [flutter](https://flutter.dev/multi-platform).
If we use nodejs in the backend, react-native would use development time and increase overall type safety.
Since we could use typescript in front- and back-end.

If [pocketbase](https://pocketbase.io/docs/) probably flutter is the better choice for the frontend since it has a full supported dart [library](https://github.com/pocketbase/dart-sdk). Or maybe not, seems like the [realtime service](https://github.com/pocketbase/dart-sdk) does not work.

#### React Native

* Build everything in react native use [react-native-web](https://necolas.github.io/react-native-web/) to transform components for the web.
* Routing mobile [react-navigation](https://reactnavigation.org/)
* Routing web either react-navigation or maybe easier [nextjs](https://nextjs.org/)
* [Example repo for react-native-web and navigation](https://github.com/criszz77/luna)

### Backend

#### Possibilites
* https://pocketbase.io/docs/
* https://supabase.com/docs 

#### Literature
* https://strapi.io/blog/real-time-chat-application-using-strapi-next-socket-io-and-postgre-sql
