import React from 'react';

class Page extends React.Component {
    render() {
        return (
            <div>
                <p>Hey I am the page component.</p>
                {this.props.children}
            </div>
        )

    }
}

export default Page;
