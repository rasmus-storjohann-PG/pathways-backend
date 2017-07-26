# Mapping to OpenReferral

seems the following fields are not as easily mappable:
`startDate`
`endDate`
`coverage`
`availability`
`referralMethod`
`referralNextSteps`
`feedbackMechanism`
`feedbackDelay`
`complaintsMechanism`
`additionalDetails`
`comments`

**Here is how it may look:**

## Legacy Services Advisor JSON Format (Jordan/Turkey)

```json
{
	"id": "319",
	"organization": "ASAM",
	"xorganizationLogo": {
		"src": "http://admin.turkey.servicesadvisor.org/sites/default/files/styles/small_logo/public/servicepartner/asam_ve_sgdd_logo.png?itok=LDjwszfv",
		"alt": ""
	},
	"region": "Education: Altındağ: 319",
	"startDate": "2017-01-01",
	"endDate": "2017-12-31",
	"serviceName": "Education: Altındağ: 319",
	"XXXnationality": "Syrians, Other nationalities",
	"intakeCriteria": "Children 6 up to 12 y/o, Children 13 to 17 y/o, Children out of school",
	"accessibility": "Visits by outreach staff and volunteers, Walk-in",
	"coverage": "Province where the service is located",
	"availability": "Monthly",
	"referralMethod": "Referral is not required",
	"referralNextSteps": "",
	"feedbackMechanism": "",
	"feedbackDelay": "",
	"complaintsMechanism": "Central email for complaints / suggestions, Direct complaint to service provider",
	"LegalDocumentsRequired": "Copy of Turkish Registration ID card (TP/ IP / Residence Permit), Pre-registration document delivered by DGMM",
	"location": {
		"geometry": ""
	},
	"locationAlternate": {
		"geometry": "{\"type\":\"Point\",\"coordinates\":[32.934420704842,39.960653239606]}"
	},
	"category": "Education",
	"servicesProvided": "Education›Education opportunities›Offer education outreach›Information on enrolment in education programmes||Education›Education opportunities›Provide education assistance›School supplies||Education›Education opportunities›Provide informal education›Provide catch-up/ supplementary instruction programmes in Turkish||Education›Education opportunities›Provide language classes›Turkish classes for children||Education›Education opportunities›Provide transportation for education›Provide transportation to education activities||Education›Education opportunities›Recreational activities›Recreational activities for children",
	"subCategory": "Education opportunities",
	"officeHours": "Monday: 09:00-12:00, 13:00-17:00|Tuesday: 09:00-12:00, 13:00-17:00|Wednesday: 09:00-12:00, 13:00-17:00|Thursday: 09:00-12:00, 13:00-17:00|Friday: 09:00-12:00, 13:00-17:00|",
	"hotlinePhone": "2242223221",
	"infoLink": "https://ar-ar.facebook.com/mhpss.uossm/",
	"publicAddress": "Battalgazi Mah. Bostancik Cad. 980. Sok. No:6 Altindag/Ankara. Educational Activities will take place in ASAM centers.",
	"additionalDetails": "There will be two different sections for the classes (morning and afternoon) consist of 4 class hours each working day. Educational activities will take place in ASAM centers.",
	"comments": "For complaints and suggestions, please email nrc.feedback.turkey@nrc.no"
}
```

## Proposed OpenReferral Format

### service
```json
{
    "id" : "319",
    "organization_id" : "21",
    "name" : "Education: Altındağ: 319",
    "alternate_name" : "",
    "description" : "",
    "url" : "https://ar-ar.facebook.com/mhpss.uossm/",
    "email" : "info@langleycdc.com",
    "status" : "Active",
    "application_process" : "Visits by outreach staff and volunteers, Walk-in",
    "wait_time" : ""
}
```
### organization
```json
{
    "id" : "21",
    "name" : "ASAM",
    "alternate_name" : "Langley Children's Society",
    "description" : "",
    "email" : "info@langleycdc.com",
    "url" : "https://ar-ar.facebook.com/mhpss.uossm/",
    "tax_status" : "None or unknown",
    "tax_id" : "",
    "year_incorporated" : ""
}
```
### service_area
```json
{
    "id" : "5115",
    "service_id" : "319",
    "service_area" : "Turkey;Altındağ"
}
```
### required_document
```json
[
    {
        "id" : "131",
        "service_id" : "319",
        "document" : "Copy of Turkish Registration ID card (TP/ IP / Residence Permit)"
    },
    {
        "id" : 9491324,
        "service_id" : "319",
        "document" : "Pre-registration document delivered by DGMM"
    }
]
```
### location
```json
{
    "id" : "10",
    "organization_id" : "21",
    "name" : "ASAM",
    "alternate_name" : "",
    "transportation" : "",
    "latitude" : 32.934420704842,
    "longitude" : 39.960653239606,
    "description" : ""
}
```
### phone
```json
{
    "id" : "10",
    "service_id" : "319",
    "organization_id" : "21",
    "contact_id" : 9487385,
    "number" : "224-222-3221",
    "extension" : "",
    "type" : "",
    "department" : "",
    "country_prefix" : 1
}
```
### physical_address
```json
{
    "id" : "50",
    "location_id" : "10",
    "attention" : "",
    "address_1" : "Battalgazi Mah. Bostancik Cad. 980. Sok. No:6",
    "address_2" : "",
    "address_3" : "",
    "address_4" : "",
    "city" : "Ankara",
    "state_province" : "Ankara",
    "postal_code" : "06980",
    "country" : "Turkey"
}
```
### eligibility
```json
{
    "id" : "501",
    "service_id" : "319",
    "eligibility" : "Children 6 up to 12 y/o, Children 13 to 17 y/o, Children out of school"
}
```
### taxonomy
```json
[
    {
        "id": "1",
        "name": "Education",
        "parent_id": "",
        "parent_name": "",
        "vocabulary": ""
    },
    {
        "id": "2",
        "name": "Education opportunities",
        "parent_id": "1",
        "parent_name": "Education",
        "vocabulary": ""
    },
    {
        "id": "3",
        "name": "Offer education outreach",
        "parent_id": "2",
        "parent_name": "Education opportunities",
        "vocabulary":""
    },
    {
        "id": "4",
        "name": "Information on enrolment in education programmes",
        "parent_id": "3",
        "parent_name": "Offer education outreach",
        "vocabulary":""
    },
    {
        "id": "5",
        "name": "Provide education assistance",
        "parent_id": "2",
        "parent_name": "Education opportunities",
        "vocabulary": ""
    },
    {
        "id": "6",
        "name": "School supplies",
        "parent_id": "5",
        "parent_name": "Provide education assistance",
        "vocabulary": ""
    },
    {
        "id": "5",
        "name": "Provide education assistance",
        "parent_id": "2",
        "parent_name": "Education opportunities",
        "vocabulary": ""
    },
    {
        "id": "6",
        "name": "School supplies",
        "parent_id": "5",
        "parent_name": "Provide education assistance",
        "vocabulary": ""
    }
]
```
### regular_schedule
```json
[
    {
        "id": "100",
        "service_id": "319",
        "location_id": "10",
        "service_at_location_id": "",
        "weekday": "1",
        "opens_at": "09:00",
        "closes_at": "17:00"
    },
    {
        "id": "100",
        "service_id": "319",
        "location_id": "10",
        "service_at_location_id": "",
        "weekday": "2",
        "opens_at": "09:00",
        "closes_at": "17:00"
    },
    {
        "id": "100",
        "service_id": "319",
        "location_id": "10",
        "service_at_location_id": "",
        "weekday": "3",
        "opens_at": "09:00",
        "closes_at": "17:00"
    },
    {
        "id": "100",
        "service_id": "319",
        "location_id": "10",
        "service_at_location_id": "",
        "weekday": "4",
        "opens_at": "09:00",
        "closes_at": "17:00"
    },
    {
        "id": "100",
        "service_id": "319",
        "location_id": "10",
        "service_at_location_id": "",
        "weekday": "5",
        "opens_at": "09:00",
        "closes_at": "17:00"
    }
]
```
