import React from 'react'
import './readblog.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const ReadBlog = () => {
    return (
        <div className='read-blog'>
            <section className='read-blog-title'>
                <div className='read-blog-img'></div>

                <div>
                    <h2 className='read-blog-name'>Blog Name</h2>
                    <p className='read-blog-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a finibus mi, porta tristique orci.</p>
                </div>
            </section>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis, neque ac sagittis sollicitudin, odio leo congue nisl, sit amet venenatis lectus erat eget tortor. Donec orci neque, tristique nec eros in, tempus varius tellus. Vivamus eu cursus nulla. Pellentesque finibus finibus justo. Sed ornare placerat sapien nec laoreet. Integer at odio quam. Nulla vitae porta ipsum. In at laoreet tortor, non sagittis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus non mattis nisi, id tempor purus. Integer a convallis orci, eu luctus lacus.
                <br />
                <br />
                Curabitur imperdiet libero finibus nunc semper pellentesque. Nam id placerat risus. Aenean congue ante finibus tristique sollicitudin. Ut id tincidunt massa, nec interdum nisi. Morbi nisl quam, iaculis consequat hendrerit eget, imperdiet eget dui. Curabitur dapibus ex a blandit cursus. Praesent ultricies maximus lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                <br />
                <br />
                Sed nibh libero, ultricies sed vehicula vel, posuere sed nulla. Sed molestie viverra rhoncus. Aenean iaculis porttitor dolor, in fringilla sem maximus eu. Cras in ex iaculis, eleifend tortor eget, lacinia ante. Pellentesque luctus in lorem non tincidunt. Quisque ut dapibus mauris, finibus fringilla nunc. Suspendisse vel sollicitudin purus. Ut pretium neque lorem, sit amet varius magna blandit non. Ut condimentum diam interdum, venenatis sapien in, pellentesque erat. Nulla arcu dolor, vestibulum non maximus a, sollicitudin a ex. Etiam sapien nisl, bibendum at dolor non, hendrerit ornare velit. Aenean vitae fermentum sem. Curabitur nunc nisi, facilisis placerat velit eu, posuere finibus erat.
                <br />
                <br />
                Quisque maximus ornare tellus, sit amet sodales metus facilisis vitae. Ut massa tortor, fermentum in vulputate a, tempor quis est. Duis nec tincidunt odio, consectetur blandit dolor. Pellentesque vestibulum pharetra malesuada. Sed tincidunt in velit at facilisis. Donec ut nunc faucibus, dignissim metus vel, tempus libero. Fusce feugiat enim mi, consequat sollicitudin arcu volutpat vitae. Integer non lorem orci. Nam tristique mattis maximus. Nullam tincidunt nisi a facilisis condimentum. Etiam quis tempus dolor. Ut finibus fermentum iaculis. Quisque sollicitudin in elit sit amet dictum. Mauris quis felis lobortis, auctor purus ac, egestas felis. Mauris vitae tortor eu diam sagittis rhoncus. Fusce facilisis leo nisi, ac aliquet tortor tempus sed.
            </article>
            <div className='read-blog-nav-links'>
            <Link className='read-blog-link back' to='/blog=blogname'> <IoIosArrowBack className='read-blog-link-ico' />Back</Link>
                <Link className='read-blog-link next' to='/blog=blogname'>Next<IoIosArrowForward className='read-blog-link-ico' /></Link>
            </div>
        </div>
    )
}

export default ReadBlog