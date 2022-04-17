const Select = ({ options, onChange, selected }) => {
  return (
    <select onChange={onChange} value={selected}>
      {options.map(item => (
        <option key={item.id} value={item.id}>{item.label}</option>
      ))}
    </select>
  );
};

export default Select;
