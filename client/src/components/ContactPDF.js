import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const ContactPDF = ({ contact }) => {
  return (
    <PDFViewer width="100%" height="500">
      <Document>
        <Page size="A4">
          <View style={styles.container}>
            <Text style={styles.title}>Contact Information</Text>
            <Text>Name: {contact.name}</Text>
            <Text>Phone: {contact.phoneNo}</Text>
            <Text>Address: {contact.address}</Text>
            <Text>Email: {contact.email}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ContactPDF;
