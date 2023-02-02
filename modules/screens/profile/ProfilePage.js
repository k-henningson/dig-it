import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ScrollView, Heading, Button } from 'native-base';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../../commons/hooks/useAuth';
import { useIsFocused } from '@react-navigation/native';
import TestBarChartContainer from './TestBarChartContainer';
import { UserContext } from '../../../commons/initializers';
import { auth } from '../../../firebaseConfig';

const formatDataForChart = (data) =>
    data.reduce((acc, curr) => {
        const year = String(curr.timestamp.getFullYear());
        const month = curr.timestamp.getMonth();

        if (year in acc) {
            acc[year][month] += 1;
        } else {
            acc[year] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            acc[year][month] = 1;
        }
        return acc;
    }, {});

export default function ProfilePage() {
    const [chartData, setChartData] = useState({});

    const { user } = useAuth();

    const { guestUser, setGuestUser, setIsGuestSigningUp } =
        useContext(UserContext);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            if (user) {
                // todo - find a proper way of using an aggregation query with firestore
                //  or doing the computation on write
                getDocs(
                    query(
                        collection(db, 'testResults'),
                        where('userId', '==', user.uid)
                    )
                ).then((res) => {
                    const resData = res.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                            timestamp: doc.data().timestamp.toDate(),
                        };
                    });
                    setChartData(formatDataForChart(resData));
                });
            } else {
                setChartData(formatDataForChart(guestUser.testResults));
            }
        }
    }, [isFocused]);

    const logout = () => {
        if (!user) {
            setGuestUser(null);
        } else {
            auth.signOut();
        }
    };

    const handleSignup = () => {
        setIsGuestSigningUp(true);
    };

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                }}
            >
                {user && <Heading margin="14px">{user.displayName}</Heading>}
                <TestBarChartContainer chartData={chartData} />
                {!user && (
                    <Button onPress={handleSignup}>Create account</Button>
                )}
                {/* todo - below is commented to be able for us to erase guest data for testing, uncomment before releasing */}
                {/* {user && ( */}
                <Button onPress={logout}>Sign out</Button>
                {/* )} */}
            </View>
        </ScrollView>
    );
}
