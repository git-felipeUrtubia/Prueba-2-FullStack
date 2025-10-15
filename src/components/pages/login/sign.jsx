
import '../../../assets/styles/sign.css'

export const Sign = () => {
    return (
        <div className='contain-form'>
            <section className='section-header'>
                <a href="/home"> ir a Home</a>
            </section>

            <section className='section-body'>
                <form class="form">
                    <p class="form-title">Sign in to your account</p>
                        <div class="input-container">
                        <input type="email" placeholder="Enter email" />
                        <span>
                        </span>
                    </div>
                    <div class="input-container">
                        <input type="password" placeholder="Enter password" />
                        </div>
                        <button type="submit" class="submit">
                        Sign in
                    </button>

                    <p class="signup-link">
                        No account?
                        <a href="/home/login/registro">Sign up</a>
                    </p>
                </form>
            </section>

        </div>
    )
}
