import React from 'react';
import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";

function App() {

    return (
        <BrowserRouter>
            <div style={{padding: 24}}>
                <Card onClick={(num) => console.info(num)}
                      width={'50%'}
                      height={'200px'}
                      variant={CardVariant.outlined}
                >
                    <button>Кнопка</button>
                </Card>

                <nav>
                    <ul>
                        <li><NavLink to={'/users'}>Пользователи</NavLink></li>
                        <li><NavLink to={'/todos'}>Список дел</NavLink></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/todos'} element={<TodoPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/events'} element={
                        <div
                            style={{
                                padding: 16,
                                margin: '16px auto',
                                backgroundColor: 'blanchedalmond',
                                borderRadius: 4
                            }}>
                            <EventsExample/>
                        </div>
                    }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
