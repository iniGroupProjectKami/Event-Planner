# Event-Planner
Group-Project

--- Documentation ----

Collection for routes users
==================================================================

 **Title**
----
  Create Account

* **URL**

  /register

* **Method:**
  
  `POST`

* **DATA PARAMS**
  REQUIRED
  
  `name = [string]`
  `email = [string]`
  `password= [string]`
  
  
* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:**
    {
    "name": "Name User",
    "email": "Email User"
    }
 
* **Error Response:**

  * **Code:** 

  400 BAD REQUEST
    **Content:**
    {
    "errors": [
        "Name cannot Empty",
        "Email cannot Empty",
        "Password cannot Empty"
    ]
    }

------------------------------------------------------------------------------------

 **Title**
----
  Login Account

* **URL**

  /login

* **Method:**
  
  `POST`

* **DATA PARAMS**
  REQUIRED
  
  `email = [string]`
  `password = [string]`
  
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    {
        "access_token": "acces_token"
    }
 
* **Error Response:**

  * **Code:** 

  400 BAD REQUEST
    **Content:**
    {
        "errors": "Invalid email/password"
    }

------------------------------------------------------------------------------------

 **Title**
----
  Login Account With Google

* **URL**

  /google-login

* **Method:**
  
  `GET`
  



Collection for routes app
==================================================================

**Title**
----
  Read Museum

* **URL**

  /museums

* **Method:**
  
  `GET`

* **Request Headers**
  REQUIRED
  `headers = 'access_token'`
    
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    [
        {
            "id": 1,
            "nama_museum": "Nama Museum",
            "alamat": "Alamat Museum",
            "deskripsi": "Deskripsi Museum",
            "link": "Link Museum",
            "kode_kota": "City Code Museum",
            "kode_kecamatan": "Kecematan Museum",
            "kode_kelurahan": "Kelurahan Museum",
            "latitude": "latitude Museum",
            "longitude": "longitude Museum"
        }
    ]
 
* **Error Response:**

  * **Code:** 

  400 BAD REQUEST
    **Content:**
    {
        "errors": "You must have account, please login first"
    }

--------------------------------------------------------------------------------

**Title**
----
  Read Holidays

* **URL**

  /holidays

* **Method:**
  
  `GET`

* **Request Headers**
  REQUIRED
  `headers = 'access_token'`
    
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    [
        {
            "name": "Name Holiday",
            "description": "Desc Holiday.",
            "country": {
            "Code Country": "Code Country",
            "name Country": "Name Country"
            },
            "date": {
            "iso": "Date Holiday",
            "datetime": {
                "year": "Yera Holiday",
                "month": "Month Holiday",
                "day": "Day Holiday"
            }
            },
            "type": [
            "Observance"
            ],
            "locations": "All",
            "states": "All"
        }
    ]
 
* **Error Response:**

  * **Code:** 

  400 BAD REQUEST
    **Content:**
    {
        "errors": "You must have account, please login first"
    }

--------------------------------------------------------------------------------

**Title**
----
  Read Weather

* **URL**

  /weathers

* **Method:**
  
  `GET`

* **Request Headers**
  REQUIRED
  `headers = 'access_token'`
    
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    {
        "coord": {
            "lon": "lon weather",
            "lat": "lat weather"
        },
        "weather": [
            {
            "id": "id weather",
            "main": "main weather",
            "description": "description weather",
            "icon": "icon weather"
            }
        ],
        "base": "base weather",
        "main": {
            "temp": "temp weather",
            "feels_like": "feels_like weather",
            "temp_min": "temp_min weather",
            "temp_max": "temp_max weather",
            "pressure": "pressure weather",
            "humidity": "humidity weather"
        },
        "visibility": "visibility weather",
        "wind": {
            "speed": "speed wind weather",
            "deg": "wind deg weather"
        },
        "clouds": {
            "all": "clouds weather"
        },
        "dt": "dt weather",
        "sys": {
            "type": "type sys weather",
            "id": "id sys weather",
            "country": "country sys weather",
            "sunrise": "sunrise sys weather",
            "sunset": "sunset sys weather"
        },
        "timezone": "timezone weather",
        "id": "id weather",
        "name": "city weather",
        "cod": "cod weather"
    }
 
* **Error Response:**

  * **Code:** 

  400 BAD REQUEST
    **Content:**
    {
        "errors": "You must have account, please login first"
    }