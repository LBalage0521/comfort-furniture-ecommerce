export default function Button({
  className,
  dataBsTarget,
  dataBsToggle,
  dataId,
  label,
  onClick,
  type
})
  {
  return (
      <button
        className={className}
        data-bs-target={dataBsTarget}
        data-bs-toggle={dataBsToggle}
        data-id={dataId}
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
  )
}