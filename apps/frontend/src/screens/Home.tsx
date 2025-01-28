import { Button } from '@base/ui';
import React from 'react';

export function Home() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="p-2">
            <h1>Welcome!</h1>

            <div className="flex flex-col items-center gap-5">
                <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
                <p>
                    Count: <code>{count}</code>
                </p>
            </div>
        </div>
    );
}
