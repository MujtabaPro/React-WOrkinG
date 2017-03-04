/*create component Method*/
var component = React.createClass({
        render: function() {
            return (React.DOM.div(null, React.DOM.h1({ className: "head" }, "Welcome To React")))
        }
    }

)

/* create render Method*/
ReactDOM.render(
    React.createElement(component),
    document.getElementById('text')
)






/* only render Method with style*/
ReactDOM.render(
    React.DOM.h1({ className: "head1" }, "Hellow World!"),
    document.getElementById('text1')
)







/*ReactDOM.render(
    React.DOM.h1(null, "Hellow World!"),
    document.getElementById('text')
)*/