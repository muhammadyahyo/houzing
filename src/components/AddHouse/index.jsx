import React, {useEffect, useState } from 'react'
import { Wrapper, MenuWrapper,Section, SelectAnt, IconDelete } from './style'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Input } from '../Generic';
import { useFormik } from 'formik';
import { Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import useRequest from "../../hooks/useRequest";


export const AddNewHouse = () => {
  const [imgs, setImgs] = useState([])
  const [category, setCategory] = useState([])
  const [img, setImg] = useState('')
  const {search} = useLocation()
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  const [initial, setInitail] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,

    locations: {
      latitude: 41.288797,
      longitude: 69.228937,
    },
  });
  
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitail({...res?.data})
      });
    }, []);

  useEffect(() => {
    request({ url: `/categories/list` ,token:true}).then((res) =>
      setCategory(res?.data || [])
    );
    },[]);

 
  
  
  const formik = useFormik({
    initialValues: initial,
    // initialValues: {},
    enableReinitialize: true,

    onSubmit: (values) => {
      
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          // categoryId: 2,
          name: "webbriain",
          attachments: imgs,
        },
      }).then((res) => {
        if (res?.success) navigate("/myprofile");
      });
    },
  });
  const addImg =()=>{
    if(!(imgs >= 4) && img){
      setImgs([...imgs, { imgPath: img, id: `${img.length * Math.random()}${img}$` }, ]);
      setImg("");
    }
  }



  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              name={"country"}
              value={formik.values.country}
              placeholder={"Country"}
            />
            <Input
              onChange={formik.handleChange}
              name={"region"}
              value={formik.values.region}
              placeholder={"Region"}
            />
            <Input
              onChange={formik.handleChange}
              name={"city"}
              value={formik.values.city}
              placeholder={"City"}
            />
            <Input
              onChange={formik.handleChange}
              name={"address"}
              value={formik.values.address}
              placeholder={"Address"}
            />
          </Section>

          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              type="number"
              onChange={formik.handleChange}
              name={"houseDetails.area"}
              value={formik.values.houseDetails?.area}
              placeholder={"Area"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name={"houseDetails.bath"}
              value={formik.values.houseDetails?.bath}
              placeholder={"Bath"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name={"houseDetails.beds"}
              value={formik.values.houseDetails?.beds}
              placeholder={"Beds"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name={"houseDetails.garage"}
              value={formik.values.houseDetails?.garage}
              placeholder={"Garage"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name={"houseDetails.yearBuilt"}
              value={formik.values.houseDetails?.yearBuilt}
              placeholder={"Year Built"}
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name={"houseDetails.room"}
              value={formik.values.houseDetails?.room}
              placeholder={"Rooms"}
            />

        <SelectAnt
              defaultValue={"Select Category"}
              value={formik.values.categoryId}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {category.map((value) => {
                return (
                  <SelectAnt.Option key={value.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>

          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              onChange={formik.handleChange}
              name={"name"}
              value={formik.values.name}
              placeholder={"Name"}
            />
            <Input
              onChange={formik.handleChange}
              name={"zipCode"}
              value={formik.values.zipCode}
              placeholder={"Zip Code"}
            />
            <Input
              onChange={formik.handleChange}
              name={"price"}
              value={formik.values.price}
              placeholder={"Price"}
            />
            <Input
              onChange={formik.handleChange}
              name={"salePrice"}
              value={formik.values.salePrice}
              placeholder={"Sale price"}
            />
          </Section>

          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />
            <Button type={"button"} onClick={addImg} disabled={imgs.length >= 4}>
              Add Image URL
            </Button>
          </Section>

            <Section flex={'true'}>
            {imgs.map((value) => {
              return (
                <pre>
                  {value?.imgPath}{" "}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
            </Section>

          <Section>
            <TextArea
              rows={6}
              onChange={formik.handleChange}
              placeholder={"Description"}
              name="description"
              value={formik.values.description}

            />
          </Section>

          <h1 className="subTitle">Additional</h1>
          <Section gap={"true"}>
            <Section flex={"true"}>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.bus'>Bus Stop</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.garden'>Garden</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.market'>Market</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.park'>Park</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.parking'>Parking</Checkbox>
            </Section>
            <Section flex={"true"}>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.school'>School</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.stadium'>Stadium</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.subway'>Subway</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.superMarket'>Super Market</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.tv'>TV</Checkbox>
            </Section>
            <Section flex={"true"}>
              <Checkbox onChange={formik.handleChange} name='componentsDto.airCondition'>Air Condition</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.countryard'>Countryard</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.furniture'>Furniture</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.gasStove'>Gas Stove</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.internet'>Internet</Checkbox>
            </Section>
          </Section>
          <Button type={"submit"}>{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
}
export default AddNewHouse