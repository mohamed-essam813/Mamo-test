# Mamo technical test

This documentation covers:

- Get Started
- Files Structure
- Stack
- Features
- Theming
- Screenshots

## Get started

To get started you can run the app in development

```sh
git clone https://github.com/mohamed-essam813/Mamo-test.git
cd Mamo-test
yarn
yarn start
```

## File Structure

📦src
┣ 📂assets
┃ ┗ 📂images
┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┗ 📜mamo-pay-logo-business-white.svg
┣ 📂components
┃ ┣ 📂breadCrumbs
┃ ┃ ┣ 📜BreadCrumbs.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂button
┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂layout
┃ ┃ ┣ 📜Layout.tsx
┃ ┃ ┣ 📜Layout.types.ts
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂table
┃ ┃ ┣ 📜PaginationAction.tsx
┃ ┃ ┣ 📜Table.tsx
┃ ┃ ┣ 📜index.ts
┃ ┃ ┗ 📜labelDisplayedRows.tsx
┃ ┗ 📜.DS_Store
┣ 📂data
┃ ┗ 📜invoices.ts
┣ 📂theme
┃ ┣ 📜Colors.ts
┃ ┣ 📜Theme.ts
┃ ┗ 📜index.ts
┣ 📂views
┃ ┣ 📂accountSettings
┃ ┃ ┣ 📜AccountSettings.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂invoices
┃ ┃ ┣ 📂createInvoiceDialog
┃ ┃ ┃ ┣ 📜CreateInvoiceDialog.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂invoiceCard
┃ ┃ ┃ ┣ 📜InvoiceCard.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📜Invoices.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂overview
┃ ┃ ┣ 📜Overview.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂payments
┃ ┃ ┣ 📜Payments.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂paymentsLinks
┃ ┃ ┣ 📜PaymentsLinks.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂settlements
┃ ┃ ┣ 📜Settlements.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📜.DS_Store
┃ ┗ 📜index.ts
┣ 📜.DS_Store
┣ 📜App.tsx
┣ 📜Routes.ts
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┣ 📜reportWebVitals.ts
┗ 📜setupTests.ts

- `assets`
  images, fonts, ...etc
- `components`
  All components should be in one folder, with no nesting!
  Each component has its own folder, it contains the jsx component itself as well as styles, ...etc.
- `data`
  Data layer and can be used to implement what data layer you want to do, ...etc
- `views`
  A view is what simply what get passed to routes, each page folder should be same as a component folder
- `theme`
  Scroll below for more details about theming

## Stack

This app is built with React.js, Material-UI, Css-in-js.

## Features

- View list of invoices with ability to open form to add or create new invoice

## Theming

📦theme
┣ 📜Colors.ts
┣ 📜Theme.ts
┗ 📜index.ts

Allows for keeping consistency and easy customization for all design aspects of the app.

Imagine that you have to update the border-radius of over a 100 components, instead it should be done with a single line of code.

Material-UI provides a greate api `ThemeProvider`, for customizing its own components or even changing their default props.

Customization here includes palette, typography, mixins, animation keyframes/transitions, shadows, spacing, breakpoints, border-radius and z-index. (This could be done without material-ui as well).

## Screenshots
