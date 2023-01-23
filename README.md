# md-selector-react is a React components created using `create-react-app`.

this component is a simple select with a label.

to import my package run the following command: **npm install md-selector-react**

## Quick Example

Array format example for the props 'valuesList':

const myArray = [
    {
        "name":"random1"
    },
    {
        "name":"random2"
    },
    {
        "name":"random3"
    }
]

it is the name value that will be read.

```
import { Selector } from "md-react-selector";

return(
        <div className="examples">
            <Selector
                title="YourTitle"
                valuesList={Array}
                onChange={(e)=>console.log(e.target.value)}
            />
        </div>
)

```

If you want another example feel free to look in the repo *src > examples*