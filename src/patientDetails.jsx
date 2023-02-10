import React from 'react';
import FHIR from 'fhirclient';
// import "https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"

function PatientDetails() {
    FHIR.oauth2.ready().then(function (client) {
        debugger;
        // Render the current patient (or any error)
        client.patient.read().then(
            function (pt) {
                document.getElementById("patient").innerText = JSON.stringify(pt, null, 4);
            },
            function (error) {
                document.getElementById("patient").innerText = error.stack;
            }
        );

        // Get MedicationRequests for the selected patient
        client.request("/Observation?patient=" + client.patient.id, {
            resolveReferences: ["valueQuantity"],
            graph: true
        })

            // Reject if no MedicationRequests are found
            .then(function (data) {
                if (!data.entry || !data.entry.length) {
                    throw new Error("No observation found for the selected patient");
                }
                return data.entry;
            })


            // Render the current patient's medications (or any error)
            .then(
                function (meds) {
                    document.getElementById("meds").innerText = JSON.stringify(meds, null, 4);
                },
                function (error) {
                    document.getElementById("meds").innerText = error.stack;
                }
            );

    }).catch(console.error);
    <script src="https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"></script>
    return (
        <div>
            <h4>Current Patient</h4>
            <div id="patient">Loading...</div>
            <br />
            <h4>Observations</h4>
            <div id="meds">Loading...</div>
        </div>
    )
}

export default PatientDetails;