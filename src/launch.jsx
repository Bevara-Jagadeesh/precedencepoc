import React from 'react';
import FHIR from 'fhirclient';
// import "https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"

function Launch () {
    <script src="https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"></script>
    FHIR.oauth2.authorize({
      clientId: "f5ff1bd2-34e6-4774-a03e-3a989b20bf91",
      scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
      iss:"https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
      redirectUri: "http://10.10.13.14:3444/patientDetails",
      launch:"f5ff1bd2-34e6-4774-a03e-3a989b20bf91",
      response_type:"code"
    });
      return(
        <p>Authorizing.....</p>
      );
}

export default Launch;