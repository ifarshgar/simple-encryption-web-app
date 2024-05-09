import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { MainContentContainer } from 'Containers/MainContent.container';
import './styles.css';

export default function App() {
  return (
    <Stack className="app" direction="row">
      <Container maxWidth="lg" className="app-container">
        <Stack direction="row" className="sections">
          <MainContentContainer />
        </Stack>
      </Container>
    </Stack>
  );
}
