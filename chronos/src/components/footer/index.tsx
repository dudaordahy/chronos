import {Styles} from './styles.module.css';

export function Footer() {
    return (
        <footer className={Styles.footer}>
            <a href="#">
                Entenda como funciona a técnica Pomodoro
            </a>

            <a href="#">
                Chronos Pomodoro &copy; {new Data().getFullYear()} - Feito com ❤️
            </a>
        </footer>
    );
}