import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import ContactDetails from './containers/ContactDetails';
import ContactsTable from './containers/ContactsTable';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196F3',
      },
      secondary: {
        main: '#1DE9B6',
      },
      tertiary: {
        main: '#757575',
      },
      common: {
        white: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header header="contactify" />
      <div
        style={{
          display: 'flex',
          gap: '19px',
          alignItems: 'flex-start',
          margin: '44px 36px',
        }}
      >
        <ContactsTable />
        <ContactDetails />
      </div>
    </ThemeProvider>
  );
}

export default App;
