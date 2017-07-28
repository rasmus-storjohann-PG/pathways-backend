```json
{
        "additional_info": "",
        "additional_info_ar": "",
        "additional_info_de": "",
        "additional_info_en": "",
        "address": "Mehringhof \r\nGneisenaustr. 2a \r\nBackyard, rising 3, 2nd Floor \r\n10961 Berlin-Kreuzberg ",
        "address_ar": "",
        "address_city": "",
        "address_city_ar": "",
        "address_city_de": "",
        "address_city_en": "",
        "address_de": "",
        "address_en": "Mehringhof \r\nGneisenaustr. 2a \r\nBackyard, rising 3, 2nd Floor \r\n10961 Berlin-Kreuzberg ",
        "address_floor": null,
        "address_floor_ar": null,
        "address_floor_de": null,
        "address_floor_en": null,
        "address_fr": "",
        "address_in_country_language": null,
        "cost_of_service": "free",
        "description": "An organization set up to help find clinics",
        "description_ar": "",
        "description_de": "",
        "description_en": "An organization set up to help find clinics",
        "email": "",
        "exclude_from_confirmation": false,
        "facebook_page": "",
        "focal_point_email": null,
        "focal_point_first_name": null,
        "focal_point_last_name": null,
        "friday_close": null,
        "friday_open": null,
        "id": 464,
        "image": null,
        "is_mobile": false,
        "location": {
            "coordinates": [
                13.388159,
                52.492103
            ],
            "type": "Point"
        },
        "monday_close": null,
        "monday_open": null,
        "name": "Medib\u00fcro Berlin",
        "name_ar": "",
        "name_de": "",
        "name_en": "Medib\u00fcro Berlin",
        "opening_time": {
            "24/7": false,
            "friday": [
                {
                    "close": null,
                    "open": null
                }
            ],
            "monday": [
                {
                    "close": null,
                    "open": null
                }
            ],
            "saturday": [
                {
                    "close": "18:30:00",
                    "open": "16:30:00"
                }
            ],
            "sunday": [
                {
                    "close": null,
                    "open": null
                }
            ],
            "thursday": [
                {
                    "close": null,
                    "open": null
                }
            ],
            "tuesday": [
                {
                    "close": null,
                    "open": null
                }
            ],
            "wednesday": [
                {
                    "close": "18:30:00",
                    "open": "16:30:00"
                }
            ]
        },
        "phone_number": "+49 30 694 67 46",
        "provider": {
            "address": "",
            "address_ar": "",
            "address_de": "",
            "address_en": "",
            "description": "",
            "description_ar": "",
            "description_de": "",
            "description_en": "",
            "focal_point_name": "",
            "focal_point_name_ar": "",
            "focal_point_name_de": "",
            "focal_point_name_en": "",
            "focal_point_phone_number": null,
            "id": 58,
            "name": "Clinic Finder",
            "name_ar": "",
            "name_de": "",
            "name_el": "",
            "name_en": "Clinic Finder",
            "number_of_monthly_beneficiaries": null,
            "phone_number": null,
            "type": 10,
            "url": "http://admin.next.refugee.info/v2/providers/58/",
            "user": null,
            "website": ""
        },
        "provider_fetch_url": "/v1/providers/58/fetch/",
        "region": {
            "code": "DE",
            "hidden": true,
            "id": 3,
            "level": 1,
            "name": "Germany",
            "slug": "germany",
            "title": "Germany",
            "title_ar": "\u0623\u0644\u0645\u0627\u0646\u064a\u0627 (Germany)",
            "title_de": "",
            "title_el": "Germany",
            "title_en": "Germany",
        },
        "saturday_close": "18:30:00",
        "saturday_open": "16:30:00",
        "selection_criteria": [],
        "slug": "germany_58_Medibro-Berlin",
        "status": "current",
        "sunday_close": null,
        "sunday_open": null,
        "tags": [],
        "thursday_close": null,
        "thursday_open": null,
        "tuesday_close": null,
        "tuesday_open": null,
        "type": 2,
        "types": [
            {
                "color": "#FF0000",
                "comments": "including psychosocial and disabilities",
                "comments_ar": "",
                "comments_de": "",
                "comments_en": "including psychosocial and disabilities",
                "icon_base64": "",
                "icon_url": "",
                "id": 2,
                "name": "Health & well-being",
                "name_ar": "\u0627\u0644\u0635\u062d\u0629 \u0648 \u0627\u0644\u0639\u0627\u0641\u064a\u0629",
                "name_de": "",
                "name_en": "Health & well-being",
                "name_es": "",
                "name_fa": "\u0628\u0647\u062f\u0627\u0634\u062a \u0648 \u0633\u0644\u0627\u0645\u062a \u0631\u0648\u0627\u0646\u06cc",
                "name_fr": "",
                "number": 2,
                "vector_icon": "icon-medkit"
            }
        ],
        "update_of": null,
        "updated_at": "2017-07-06T12:45:20.145683Z",
        "url": "http://admin.next.refugee.info/v2/custom-servicetypes/464/",
        "website": "",
        "wednesday_close": "18:30:00",
        "wednesday_open": "16:30:00"
}
```

## Proposed OpenReferral Format
### service
```json
{
    "id" : "319",
    "organization_id" : "21",
    "name" : "Medib\u00fcro Berlin",
    "alternate_name" : "",
    "description" : "",
    "url" : "http://admin.next.refugee.info/v2/custom-servicetypes/464/",
    "email" : "info@langleycdc.com",
    "status" : "current",
    "application_process" : "Visits by outreach staff and volunteers, Walk-in",
    "wait_time" : ""
}
```
### organization
```json
{
    "id" : "21",
    "name" : "Clinic Finder",
    "alternate_name" : "CF",
    "description" : "An organization set up to help find clinics",
    "email" : "info@langleycdc.com",
    "url" : "http://admin.next.refugee.info/v2/providers/58/",
    "tax_status" : "None or unknown",
    "tax_id" : "",
    "year_incorporated" : ""
}
```
### service_area
```json
[
    {
        "id" : "5115",
        "service_id" : "319",
        "service_area" : "Germany;Kreuzb;;"
    }
    {
        "id" : "5115",
        "service_id" : "319",
        "service_area" : "Germany;;"
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
    "latitude" : 13.388159,
    "longitude" : 52.492103,
    "description" : ""
}
```json
### phone
```json
{
    "id" : "10",
    "service_id" : "319",
    "organization_id" : "21",
    "contact_id" : "500",
    "number" : "49306946746",
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
    "address_1" : "Mehringhof \r\nGneisenaustr. 2a Backyard, rising 3, 2nd Floor 10961",
    "address_2" : "",
    "address_3" : "",
    "address_4" : "",
    "city" : "Berlin",
    "state_province" : "Kreuzb",
    "postal_code" : "10961",
    "country" : "Germany"
}
```
### taxonomy
```json
[
    {
        "id": "1",
        "name": "Health & well-being",
        "parent_id": "",
        "parent_name": "",
        "vocabulary": "health,well-being"
    },

    {
        "id": "2",
        "name": "Psychosocial and Disabilities",
        "parent_id": "1",
        "parent_name": "Health & well-being",
        "vocabulary":"psychosocial,disabilities"
    },
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
        "weekday": "3",
        "opens_at": "16:30",
        "closes_at": "18:30"
    },
    {
        "id": "100",
        "service_id": "319",
        "location_id": "10",
        "service_at_location_id": "",
        "weekday": "6",
        "opens_at": "16:30",
        "closes_at": "18:30"
    }
]
```
### metadata
```json
{
    "id": "12311",
    "resource_id": "319",
    "last_action_date": "2017-07-06T12:45:20.145683Z",
    "last_action_type": "update",
    "field_name": "description",
    "previous_value": "Not a whole lot going on.",
    "replacement_value": "A really good description.",
    "updated_by": "Reynaldo Rodrigues"
}
```


