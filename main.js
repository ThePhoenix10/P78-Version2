var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "IMG_1419.jpg", "IMG_1295.jpg", "59837b14-f692-48f5-a545-a3a0724dce47.JPG", "IMG_8160.jpg"];
var names = ["Family Book","Mani Kothapalli - My Mom", "Sriramakrishna Vellanki - My Dad", "Srilakshmi Kothapalli - My Grandma", "Nirmalya Routray - My Best Friend", ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
