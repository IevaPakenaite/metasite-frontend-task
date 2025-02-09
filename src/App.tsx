import Header from "./components/Header";
import ContactDetails from "./containers/ContactDetails";
import ContactsTable from "./containers/ContactsTable";

function App() {
  return (
    <>
      <Header header="contactify" />
      <div style={{ display: "flex", gap: "19px", alignItems: "flex-start" }}>
        <ContactsTable />
        <ContactDetails />
      </div>
    </>
  );
}

export default App;
