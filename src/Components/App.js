import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const contacts = [
    {
      id: "1",
      name: "kulin",
      email: "rangani@gmail.com",
    },
    {
      id: "2",
      name: "brijesh",
      email: "prajapati@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
