import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieBanner({
  initialState = { dismissOnScroll: true, dismissOnClick: false },
    }) {
    // reset cookies on first render
    const [state, setState] = useState(initialState);
    useEffect(() => {
        if (!state.accepted && Cookies.get('accepts-cookies')) {
        Cookies.remove('accepts-cookies');
        }
    }, [state.accepted]);

    const styles = {
        banner: {
        fontFamily: 'Source Sans Pro',
        height: 57,
        background:
            'rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat',
        backgroundSize: '30px 30px',
        backgroundColor: '',
        fontSize: '15px',
        fontWeight: 600,
        },
        button: {
        border: '1px solid white',
        borderRadius: 4,
        width: 66,
        height: 32,
        lineHeight: '32px',
        background: 'transparent',
        color: 'white',
        fontSize: '14px',
        fontWeight: 600,
        opacity: 1,
        right: 20,
        marginTop: -18,
        },
        message: {
        display: 'block',
        padding: '9px 67px',
        lineHeight: 1.3,
        textAlign: 'left',
        marginRight: 244,
        color: 'white',
        },
        link: {
        textDecoration: 'none',
        fontWeight: 'bold',
        },
    };

    const message =
        "Buildo uses cookies to guarantee users the employment of its site features, offering a better purchasing experience. By continuing to browse the site you're agreeing to our use of cookies.";

    const toggleDismissOnScroll = () => {
        setState({ ...state, dismissOnScroll: !state.dismissOnScroll });
    };

    const toggleDismissOnClick = () => {
        setState({ ...state, dismissOnClick: !state.dismissOnClick });
    };

    const resetCookies = () => {
        Cookies.remove('accepts-cookies');
        setState({ accepted: false });
    };

    return (
        <div>
        <p>
            accepts-cookies: {Cookies.get('accepts-cookies') || 'false'}
        </p>
        <button onClick={toggleDismissOnScroll}>
            {`${state.dismissOnScroll ? 'Disable' : 'Activate'} dismissOnScroll`}
        </button>
        <button onClick={toggleDismissOnClick} style={{ marginLeft: 20 }}>
            {`${state.dismissOnClick ? 'Disable' : 'Activate'} dismissOnClick`}
        </button>
        <button onClick={resetCookies} style={{ marginLeft: 20 }}>
            Reset Cookies
        </button>
        <CookieBanner
            styles={styles}
            message={message}
            link={
            <a href="http://nocookielaw.com/">
                More information on our use of cookies
            </a>
            }
            buttonMessage="Close"
            dismissOnScroll={state.dismissOnScroll}
            dismissOnClick={state.dismissOnClick}
            onAccept={() => setState({ accepted: true })}
        />
        </div>
    );
}