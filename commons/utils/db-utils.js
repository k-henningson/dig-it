import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getAyncStorageData } from './storage-utils';

export const saveGuestTestResultsToDb = async ({ uid }) => {
    const user = await getAyncStorageData('guestUser');

    if (user) {
        await Promise.all(
            user.testResults.map((testResult) => {
                const testResultWithId = {
                    ...testResult,
                    // we have to convert back to date after data has been json stringified / parsed
                    timestamp: new Date(testResult.timestamp),
                    userId: uid,
                };
                return addDoc(collection(db, 'testResults'), testResultWithId);
            })
        );
    }
};

// todo - implement batchUpdateTestResults
// const batchUpdateTestResults = async ({ uid }) => {
//     const user = await getData('guestUser');
//     const testResults = user.testResults.map((result) => ({
//         ...result,
//         uid: uid,
//     }));
//
//     const batch = writeBatch(db);
//     batch.commit();
// };
