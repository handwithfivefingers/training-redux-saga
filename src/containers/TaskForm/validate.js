const validate = (values) => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors['title'] = 'Vui lòng nhập tiêu đề';
  } else if (title.trim() && title.length < 5) {
    errors['title'] = 'Vui lòng nhập nhiều hơn 5 kí tự';
  }
  return errors;
};
export default validate;
