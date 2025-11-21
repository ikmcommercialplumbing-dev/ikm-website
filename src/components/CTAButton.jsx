import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3 text-base',
}

const CTAButton = forwardRef(({ as: Component = Link, to = '#', href, children, size = 'md', className = '', ...props }, ref) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-red/50 active:translate-y-[0px]'

  const componentProps = {
    ref,
    className: `${baseStyles} ${sizes[size]} ${className}`.trim(),
    ...props,
  }

  if (href) {
    return (
      <a href={href} {...componentProps}>
        {children}
      </a>
    )
  }

  return (
    <Component to={to} {...componentProps}>
      {children}
    </Component>
  )
})

CTAButton.displayName = 'CTAButton'

export default CTAButton
