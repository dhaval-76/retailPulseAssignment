import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';

const uploadFile = ({
  fileUri,
  refString,
  progressListener,
  uploadedDataListener,
  errorListener,
}) => {
  fileUri =
    Platform.OS === 'android' ? fileUri : fileUri.replace('file://', '');

  const uploadTask = storage().ref(refString).putFile(fileUri);

  uploadTask.on(
    'state_changed',
    taskSnapshot => {
      const progress =
        (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;

      progressListener(progress, taskSnapshot);
    },
    error => errorListener(error),
    async () => {
      const fileUrl = await uploadTask.snapshot.ref.getDownloadURL();

      uploadedDataListener({
        fileUrl,
        fileName: uploadTask.snapshot.metadata.name,
        fileType: uploadTask.snapshot.metadata.contentType,
        fileSizeInBytes: uploadTask.snapshot.metadata.size,
        filePath: uploadTask.snapshot.metadata.fullPath,
      });
    },
  );
};

export default uploadFile;
