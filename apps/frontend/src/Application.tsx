import * as React from 'react';
import './App.css';
import { Button } from '@base/ui/button';

export default function Application() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>Welcome</h1>
            <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
                <p>
                    Count: <code>{count}</code>
                </p>
            </div>
        </>
    );
}
