import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
    return (
        <div>
            <Card onClick={(num) => console.info(num)}
                  width={'50%'}
                  height={'200px'}
                  variant={CardVariant.outlined}
            >
                <button>Кнопка</button>
            </Card>
        </div>
    );
}

export default App;
