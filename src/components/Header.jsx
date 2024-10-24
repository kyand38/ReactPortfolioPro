import { Link } from 'react-router-dom';


function Header() {
    const name = 'Kyle Anderson'
    return (
    <div>
            <header>
                <h1>{name}</h1>
                <ul>
                    <li>
                        <Link>About Me</Link>
                    </li>
                    <li>
                        <Link>Porfolio</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <Link>Resume</Link>
                    </li>
                </ul>
            </header>
    </div>
    )
};