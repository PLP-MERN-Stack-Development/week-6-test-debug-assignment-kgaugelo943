const validateBugInput = require('../utils/validateBugInput');

describe('validateBugInput', () => {
  it('should return valid when title is present and status is valid', () => {
    const { isValid, errors } = validateBugInput({ title: 'Bug #1', status: 'open' });
    expect(isValid).toBe(true);
    expect(errors).toEqual({});
  });

  it('should return error when title is missing', () => {
    const { isValid, errors } = validateBugInput({ status: 'open' });
    expect(isValid).toBe(false);
    expect(errors.title).toBe('Title is required');
  });

  it('should return error for invalid status', () => {
    const { isValid, errors } = validateBugInput({ title: 'Bug', status: 'done' });
    expect(isValid).toBe(false);
    expect(errors.status).toBe('Invalid status');
  });
});
