import { something } from 'test-package/something';
import { somethingElse } from 'test-package/sub-folder/something-else';

document.addEventListener('DOMContentLoaded', () => {
    console.log(something, somethingElse);
})