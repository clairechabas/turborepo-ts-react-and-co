import { Button } from '@base/ui';
import * as React from 'react';

export default function Application() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="flex flex-col items-center gap-5">
            <h1>Welcome</h1>
            <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
            <p>
                Count: <code>{count}</code>
            </p>
        </div>
    );
}
