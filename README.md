
One endpoint to calculate the total length of wood of a tree (with all the branches).

the request should be done with a post request on the endpoint http://localhost:3000/tree-length

to start the project:

```npm i && npm start```

the data should be structure this way:

```
{
  "tree": {
    "woodLength": 5.2,
    "branches": [
      {
        "woodLength": 2.0,
        "branches": [
          {
            "woodLength": 1.5
          },
          {
            "woodLength": 1.0,
            "branches": []
          }
        ]
      },
      {
        "woodLength": 3.0,
        "branches": [
          {
            "woodLength": 1.2,
            "branches": []
          },
          {
            "woodLength": 1.8,
            "branches": [
              {
                "woodLength": 0.7,
                "branches": []
              }
            ]
          }
        ]
      }
    ]
  }
}
```
