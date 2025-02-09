import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/storeHooks";
import { Contact } from "../models/contactModel";
import userPic from "../assets/userpic.png";
import KeyValuePair from "../components/KeyValuePair";

function ContactDetails() {
  const contact: Contact | null = useAppSelector(
    (state) => state.contacts.contact
  );

  if (!!contact) {
    return (
      <Card sx={{ width: 330, height: 340, flexShrink: 0 }}>
        <CardMedia
          sx={{ height: 183 }}
          image={userPic}
          title="user profile picture"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {contact.name} {contact.surname[0]}.
          </Typography>
          <Grid2
            container
            direction="column"
            spacing={0.5}
            sx={{ maxWidth: 300 }}
          >
            <KeyValuePair
              label="Name:"
              value={`${contact.name} ${contact.surname[0]}.`}
            />
            <KeyValuePair label="City:" value={contact.city} />
            <KeyValuePair label="Email:" value={contact.email} isEmail />
            <KeyValuePair label="Phone:" value={contact.phone} />
          </Grid2>
        </CardContent>
      </Card>
    );
  }
}

export default ContactDetails;
