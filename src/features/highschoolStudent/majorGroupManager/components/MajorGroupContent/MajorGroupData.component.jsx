import MajorTableContainer from '../../TableMajor.container';
import React from 'react';

const MajorGroupContentDemo = (props) => {
  const { data } = props;
  return (
    <>
      <p>{data.description}</p>

      <figure>
        <img src={data.thumbnailUrl} alt='Ảnh' />
        <figcaption>Hình ảnh chỉ mang tính chất minh họa</figcaption>
      </figure>
      <h2>Các ngành thuộc Nhóm Ngành {data.name}</h2>
      <p>Sau đây là các chuyên ngành đào tạo thuộc Nhóm ngành {data.name}</p>
      <MajorTableContainer majorgroup={data} />
      <p>
        Hy vọng bài viết vừa rồi đã cho bạn cái nhìn tổng quan hơn về nhóm ngành {data.name}, từ đó các bạn sẽ lựa chọn
        được chuyên ngành phù hợp với bản thần mình.{' '}
      </p>
      <h3>Tóm lại</h3>
      <p>
        Mặc dù hiện nay có rất nhiều người đang làm trái ngành, cũng do nhiều yếu tố khác nhau tác động. Nghề chọn người
        cũng không phải là một điều xa lạ khó hiểu. Tuy vậy, lựa chọn đúng ngành học mình yêu thích, học thật tốt và ra
        trường nhận được một công việc đúng chuyên ngành và đam mê của mình chẳng phải rất tuyệt vời hay sao?
      </p>
    </>
  );
};
export default MajorGroupContentDemo;
