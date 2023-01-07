import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export function useAuth() {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribeFromAuthStatuChanged = onAuthStateChanged(
            auth,
            (user) => {
                if (user) {
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    setUser(user);
                } else {
                    setUser(undefined);
                }
            }
        );

        return unsubscribeFromAuthStatuChanged;
    }, []);

    return {
        user,
    };
}
