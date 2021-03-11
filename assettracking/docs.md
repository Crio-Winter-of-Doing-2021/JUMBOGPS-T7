
# Database

We have decided to go with SQL database instead of NoSql databases. due to following reasons

* Table/Data structure for this project is not changing, it is going to be same for given requirements
* More familiar with SQL databases

# Tables in database

1. assets - In this table we will be storing all assets ids and their types
   | Column Name |  Type  |          Remarks          |
   | :---------: | :----: | :-----------------------: |
   |  asset_id   |  int   | To store id of each asset |
   | asset_type  | string |  To store type of asset   |

2. assets_active - In this table, we will only store latest update of each asset. If an asset already exists, then we will update location and timestamp of that asset otherwise we will create a new row in table. So this table will we used to provide latest location of assets to dashboard of application
   | Column Name |   Type    |                 Remarks                  |
   | :---------: | :-------: | :--------------------------------------: |
   |  asset_id   |    int    |               id of asset                |
   | asset_type  |  string   |              type of asset               |
   |  latitude   |   float   |            latitude of asset             |
   |  longitude  |   float   |            longitude of asset            |
   |   updated   | timestamp | when this record was inserted or updated |

3. assets_history - In this table we will store all records of assets including latest update. We will use this table for timeline/history page of each asset

# API

1. Dashboard Page
    * `GET` `/assets?max=maxResults&type=assetType&start=startDate&end=endDate`
    * There are multiple query parameters in above endpoint but only `max` is mandatory, all other parameters are used for filters and are optional

    ```json
    [
        {
            "asset_id": "1",
            "asset_type": "Truck",
            "location": {
                "latitude": 45.95,
                "longitude": 74.33,
                "updated": "timestamp"
            }
        },
        {
            "asset_id": "2",
            "asset_type": "Another Asset Type",
            "location": {
                "latitude": 45.95,
                "longitude": 74.33,
                "updated": "timestamp"
            }
        }
    ]
    ```

2. Timeline Page
    * `GET` `/assets/{id}`
    * For above endpoint, we will return location data available for an asset in last 24 hours
    * If asset with given id is not available in database, then we will return 4xx error code

    ```json
    {
        "asset_id": "1",
        "asset_type": "Truck",
        "location": [
            {
                "latitude": 45.95,
                "longitude": 74.33,
                "updated": "timestamp"
            },
            {
                "latitude": 45.95,
                "longitude": 74.33,
                "updated": "timestamp"
            }
        ]
    }
    ```

3. For dealing with Assets
   * `POST` `/register`
  
    ```json
    {
        "asset_type": "some_type"
    }
    ```

    Response

    ```json
    {
        "asset_id": 123
    }
    ```

    * `POST` `/updateLocation`

    ```json
    {
        "asset_id": 123,
        "asset_type": "Some Type",
        "location": {
            "latitude": 45.95,
            "longitude": 74.33,
            "updated": "timestamp"
        }
    }
    ```
